using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JournalController : ControllerBase
    {
        private readonly IJournalRepository _journalRepo;
        public JournalController(IJournalRepository journalRepo)
        {
            _journalRepo = journalRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var journals = await _journalRepo.GetAllAsync();

            var journalDto = journals.Select(s => s.ToJournalDto());

            return Ok(journalDto);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var journal = await _journalRepo.GetByIdAsync(id);

            if(journal == null)
            {
                return NotFound();
            }

            return Ok(journal.ToJournalDto());
        }
    }
}
