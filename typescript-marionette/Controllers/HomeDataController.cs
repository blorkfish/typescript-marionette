using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using typescript_marionette.Models;

namespace typescript_marionette.Controllers
{
    public class HomeDataController : ApiController
    {
        [Route("api/dataservices")]
        [HttpGet]
        public HttpResponseMessage GetDataTable()
        {
            return Request.CreateResponse<IEnumerable<string>>(HttpStatusCode.OK, GetData());
        }

        public List<string> GetData()
        {
            return new List<string> {"test1", "test2"};
        }

        [Route("api/results")]
        [HttpGet]
        public HttpResponseMessage GetUserResults()
        {
            return Request.CreateResponse<IEnumerable<UserModel>>
                (HttpStatusCode.OK, GetUserResultModels());
        }

        public List<UserModel> GetUserResultModels()
        {
            return new List<UserModel>
            {
                new UserModel { UserName = "testUser_1", RealName = "Test User No 1",
                    RoundScores =  new List<RoundScore>
                {
                      new RoundScore { RoundNumber = 1, TotalPoints = 2 }
                    , new RoundScore { RoundNumber = 2, TotalPoints = 3 }
                    , new RoundScore { RoundNumber = 3, TotalPoints = 2 }
                    , new RoundScore { RoundNumber = 4, TotalPoints = 5 }
                } },
                new UserModel { UserName = "testUser_2", RealName = "Test User No 2", 
                    RoundScores =  new List<RoundScore>
                {
                      new RoundScore { RoundNumber = 1, TotalPoints = 5 }
                    , new RoundScore { RoundNumber = 2, TotalPoints = 6 }
                    , new RoundScore { RoundNumber = 3, TotalPoints = 2 }
                    , new RoundScore { RoundNumber = 4, TotalPoints = 1 }
                }  },
                new UserModel { UserName = "testUser_3", RealName = "Test User No 3", 
                    RoundScores =  new List<RoundScore>
                {
                      new RoundScore { RoundNumber = 1, TotalPoints = 3 }
                    , new RoundScore { RoundNumber = 2, TotalPoints = 5 }
                    , new RoundScore { RoundNumber = 3, TotalPoints = 6 }
                    , new RoundScore { RoundNumber = 4, TotalPoints = 6 }
                }  }
            };
        }


    }
}
