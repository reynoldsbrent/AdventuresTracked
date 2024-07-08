using api.Dtos.Journal;
using api.Models;
using System.Runtime.CompilerServices;

namespace api.Mappers
{
    public static class JournalMappers
    {
        public static JournalDto ToJournalDto(this Journal journalModel)
        {
            return new JournalDto
            {
                JournalId = journalModel.JournalId,
                Title = journalModel.Title,
                Entry = journalModel.Entry,
                CreatedAt = journalModel.CreatedAt.Date,
                CreatedBy = journalModel.AppUser.UserName,
                TripId = journalModel.TripId
            };
        }

        public static Journal ToJournalFromCreate(this CreateJournalDto journalDto, int tripId)
        {
            return new Journal
            {
                Title = journalDto.Title,
                Entry = journalDto.Entry,
                TripId = tripId
            };
        }

        public static Journal ToJournalFromUpdate(this UpdateJournalRequestDto journalDto)
        {
            return new Journal
            {
                Title = journalDto.Title,
                Entry = journalDto.Entry
            };
        }
    }
}
