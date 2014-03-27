using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using typescript_marionette.Controllers;
using Xunit;

namespace typescript_marionette_xunit.Controllers
{
    public class HomeDataControllerTests
    {
        [Fact]
        public void GetData_Returns_ListOfStrings()
        {
            HomeDataController controller = new HomeDataController();
            Assert.Equal(new List<string> {"test1", "test2"}, controller.GetData());
        }
    }
}
