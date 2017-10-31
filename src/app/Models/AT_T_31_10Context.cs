using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AT_T_31_10.Models
{
    public class AT_T_31_10Context : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public AT_T_31_10Context() : base("name=AT_T_31_10Context")
        {
        }

        public System.Data.Entity.DbSet<AT_T_31_10.Models.Applicant> Applicants { get; set; }

        public System.Data.Entity.DbSet<AT_T_31_10.Models.Job> Jobs { get; set; }

        public System.Data.Entity.DbSet<AT_T_31_10.Models.Manager> Managers { get; set; }

        public System.Data.Entity.DbSet<AT_T_31_10.Models.Review> Reviews { get; set; }

        public System.Data.Entity.DbSet<AT_T_31_10.Models.ManagerLogins> ManagerLogins { get; set; }
    }
}
