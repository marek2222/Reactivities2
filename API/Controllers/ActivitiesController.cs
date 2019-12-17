using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ActivitiesController : ControllerBase
  {
		// generate constructor by: ctor
		// initialize field from parameter: mediator in: ActivitiesController(IMediator mediator)
    private readonly IMediator _mediator;
    public ActivitiesController(IMediator mediator)
    {
      _mediator = mediator;
    }

		[HttpGet]
		public async Task<ActionResult<List<Activity>>> List()
		{
			return await _mediator.Send(new List.Query());
		}

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> Details(Guid id)
    {
      return await _mediator.Send(new Details.Query{Id = id});
    }


  }
}