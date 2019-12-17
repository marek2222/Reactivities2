using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Application.Activities
{
  public class List
  {
    public class Query : IRequest<List<Activity>> { }

    // Implement Interface for a IRequestHandler
    // generate constructor for a Handler
    // Inictalize field from parameter for context in Handler(DataContext context)
    public class Handler : IRequestHandler<Query, List<Activity>>
    {
      private readonly DataContext _context;

      public Handler(DataContext context)
      {
        _context = context;
      }

      public async Task<List<Activity>> Handle(Query request,
        CancellationToken cancellationToken)
      {
        var activities = await _context.Activities.ToListAsync(); 
				return activities; 
      }
    }

  }
}