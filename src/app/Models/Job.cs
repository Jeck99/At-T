using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AT_T_31_10.Models
{
    public class Job
    {
        public int Id { get; set; }
        public int RecruiterId { get; set; }
        public int Experience { get; set; }
        [Required]
        public string Title { get; set; }
        public string Position { get; set; }
        public string Description { get; set; }
        public string Skillset { get; set; }
        public bool Active { get; set;}
        public bool Published { get; set;}
    }
}