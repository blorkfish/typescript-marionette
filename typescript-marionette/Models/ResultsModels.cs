using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace typescript_marionette.Models
{
    [Serializable]
    public class UserModel
    {
        public UserModel()
        {
            RoundScores = new List<RoundScore>();
        }
        public string UserName;
        public string RealName;
        public List<RoundScore> RoundScores;
    }

    [Serializable]
    public class RoundScore
    {
        public int RoundNumber;
        public int TotalPoints;
    }
}