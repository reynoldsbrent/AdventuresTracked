using api.Dtos.Journal;
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
        private readonly ITripRepository _tripRepo;
        public JournalController(IJournalRepository journalRepo, ITripRepository tripRepo)
        {
            _journalRepo = journalRepo;
            _tripRepo = tripRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var journals = await _journalRepo.GetAllAsync();

            var journalDto = journals.Select(s => s.ToJournalDto());

            return Ok(journalDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var journal = await _journalRepo.GetByIdAsync(id);

            if(journal == null)
            {
                return NotFound();
            }

            return Ok(journal.ToJournalDto());
        }

        [HttpPost("{tripId}")]
        public async Task<IActionResult> Create([FromRoute] int tripId, CreateJournalDto journalDto)
        {
            if(!await _tripRepo.TripExists(tripId))
            {
                return BadRequest("Trip does not exist");
            }

            var journalModel = journalDto.ToJournalFromCreate(tripId);
            await _journalRepo.CreateAsync(journalModel);
            return CreatedAtAction(nameof(GetById), new { id = journalModel }, journalModel.ToJournalDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var journalModel = await _journalRepo.DeleteAsync(id);

            if(journalModel == null)
            {
                return NotFound("Comment does not exist");
            }

            return Ok(journalModel);
        }
    }
}
