using api.Controllers;
using api.Dtos.Airport;
using api.Interfaces;
using api.Models;
using FakeItEasy;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace api.Tests.Controller
{
    public class AirportControllerTests
    {
        private readonly IAirportRepository _fakeRepo;
        private readonly AirportController _controller;

        public AirportControllerTests()
        {
            _fakeRepo = A.Fake<IAirportRepository>();
            _controller = new AirportController(_fakeRepo);
        }

        [Fact]
        public async Task GetByCode_ReturnsOkResult_WhenAirportExists()
        {
            // Arrange
            string testICAO = "KLAX";
            var testAirport = new Airport { ICAO = testICAO, Name = "Los Angeles International Airport" };
            A.CallTo(() => _fakeRepo.GetByCodeAsync(testICAO)).Returns(Task.FromResult(testAirport));

            // Act
            var result = await _controller.GetByCode(testICAO);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnValue = Assert.IsType<AirportDto>(okResult.Value);
            Assert.Equal(testICAO, returnValue.ICAO);
        }

        [Fact]
        public async Task GetByCode_ReturnsNotFound_WhenAirportDoesNotExist()
        {
            // Arrange
            string testICAO = "XXXX";
            A.CallTo(() => _fakeRepo.GetByCodeAsync(testICAO)).Returns(Task.FromResult<Airport>(null));

            // Act
            var result = await _controller.GetByCode(testICAO);

            // Assert
            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async Task GetByCode_ReturnsBadRequest_WhenModelStateIsInvalid()
        {
            // Arrange
            _controller.ModelState.AddModelError("ICAO", "ICAO is required");

            // Act
            var result = await _controller.GetByCode(null);

            // Assert
            Assert.IsType<BadRequestObjectResult>(result);
        }
    }
}
