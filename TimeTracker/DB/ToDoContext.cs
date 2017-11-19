using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using TimeTracker.Models;

namespace TimeTracker.DB
{
    public class ToDoContext : DbContext
    {
        public ToDoContext() : base("name=SQL_Connection")
        {

        }

        public DbSet<ToDo> ToDos { get; set; }
    }
}