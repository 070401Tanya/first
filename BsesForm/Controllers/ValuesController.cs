using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;
using MySqlConnector;
using System.Security.AccessControl;
using BsesForm;

namespace BsesForm.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ValuesController : ControllerBase
    {
        public readonly string connectionString = "Server=localhost;Database=backendform;User Id=Tanya;Password=reliance@12345";

        [HttpPost(Name = "UserData")]
        public IActionResult Post(UserData userdata)
        {
            try
            {
                using (MySqlConnection connection = new MySqlConnection(connectionString))
                {
                    connection.Open();

                    string insertQuery = "INSERT INTO individual (Title, FirstName, MiddleName, LastName, Relationship, GName)" +
                        " VALUES (@title,@FirstName, @MiddleName,@LastName,@Relationship, @GName)";

                    using (MySqlCommand cmd = new MySqlCommand(insertQuery, connection))
                    {
                        cmd.Parameters.AddWithValue("@Title", userdata.title);
                        cmd.Parameters.AddWithValue("@FirstName", userdata.FirstName);
                        cmd.Parameters.AddWithValue("@MiddleName", userdata.MiddleName);
                        cmd.Parameters.AddWithValue("@LastName", userdata.LastName);
                        cmd.Parameters.AddWithValue("@Relationship", userdata.Relationship);
                        cmd.Parameters.AddWithValue("@GName", userdata.GName);

                        cmd.ExecuteNonQuery();
                        return Ok("Data saved successfully");
                    }
                }
            }
            catch (Exception ex)
            {
                return BadRequest("An error occurred: " + ex.Message);
            }
        }
        [HttpGet(Name = "GetUserData")]
        public IActionResult GetUserData()
        {
            try
            {
                using (MySqlConnection connection = new MySqlConnection(connectionString))
                {
                    connection.Open();

                    string selectQuery = "SELECT * FROM individual"; // Modify this query as needed.

                    using (MySqlCommand cmd = new MySqlCommand(selectQuery, connection))
                    {
                        using (MySqlDataReader reader = cmd.ExecuteReader())
                        {
                            List<UserData> userDataList = new List<UserData>();

                            while (reader.Read())
                            {
                                UserData userData = new UserData
                                {
                                    title = reader["Title"].ToString(),
                                    FirstName = reader["FirstName"].ToString(),
                                    MiddleName = reader["MiddleName"].ToString(),
                                    LastName = reader["LastName"].ToString(),
                                    Relationship = reader["Relationship"].ToString(),
                                    GName = reader["GName"].ToString(),
                                };

                                userDataList.Add(userData);
                            }

                            return Ok(userDataList);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                return BadRequest("An error occurred: " + ex.Message);
            }
        }
    }
}



