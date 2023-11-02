using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;
using MySqlConnector;
using System.Security.AccessControl;
using BsesForm;

namespace BackendOfSingleField.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly string connectionString = "Server=localhost;Database=backendform;User Id=Tanya;Password=reliance@12345";

        [HttpPost(Name = "FirmData")]
        public IActionResult Post(FirmData firmdata)
        {
            try
            {
                using (MySqlConnection connection = new MySqlConnection(connectionString))
                {
                    connection.Open();

                    string insertQuery = "INSERT INTO firm (FirmName, ASignatory, DSignatory, TypeOrganization, GstNo, PanNo) VALUES (@FirmName,@ASignatory, @DSignatory,@TypeOrganization,@GstNo, @PanNo)";

                    using (MySqlCommand cmd = new MySqlCommand(insertQuery, connection))
                    {
                        cmd.Parameters.AddWithValue("@FirmName", firmdata.FirmName);
                        cmd.Parameters.AddWithValue("@ASignatory", firmdata.ASignatory);
                        cmd.Parameters.AddWithValue("@DSignatory", firmdata.DSignatory);
                        cmd.Parameters.AddWithValue("@TypeOrganization", firmdata.TypeOrganization);
                        cmd.Parameters.AddWithValue("@GstNo", firmdata.GstNo);
                        cmd.Parameters.AddWithValue("@PanNo", firmdata.PanNo);

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
        [HttpGet(Name = "GetFirmData")]
        public IActionResult GetFirmData()
        {
            try
            {
                using (MySqlConnection connection = new MySqlConnection(connectionString))
                {
                    connection.Open();

                    string selectQuery = "SELECT * FROM firm"; // Modify this query as needed.

                    using (MySqlCommand cmd = new MySqlCommand(selectQuery, connection))
                    {
                        using (MySqlDataReader reader = cmd.ExecuteReader())
                        {
                            List<FirmData> FirmDataList = new List<FirmData>();

                            while (reader.Read())
                            {
                                FirmData FirmData = new FirmData
                                {
                                    FirmName = reader["FirmName"].ToString(),
                                    ASignatory = reader["ASignatory"].ToString(),
                                    DSignatory = reader["DSignatory"].ToString(),
                                    TypeOrganization = reader["TypeOrganization"].ToString(),
                                    GstNo = reader["GstNo"].ToString(),
                                    PanNo = reader["PanNo"].ToString(),
                                };

                                FirmDataList.Add(FirmData);
                            }

                            return Ok(FirmDataList);
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
    

    