using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TimeTracker.DB;
using TimeTracker.Models;

namespace TimeTracker.Controllers
{
    public class ToDoController : ApiController
    {
        private ToDoContext db = new ToDoContext();

        //// GET: api/ToDo
        public IHttpActionResult GetToDos()
        {
            return Ok(db.ToDos.ToList());
            //return db.ToDos.Where(p => !p.IsComplited).OrderBy(p => p.Priority).ToList();

        }

        //public IEnumerable<ToDo> GetAllToDos()
        //{
        //    var isComplited = db.ToDos.Where(p => p.IsComplited).OrderBy(p => p.EndDate).ToList();
        //    var notComplited = db.ToDos.Where(p => !p.IsComplited).OrderBy(p => p.Priority).ToList();

        //    return notComplited.Concat(isComplited).ToList();
        //}
        //// GET: api/ToDo/5
        //[ResponseType(typeof(ToDo))]
        //public IHttpActionResult GetToDo(int id)
        //{
        //    ToDo toDo = db.ToDos.Find(id);
        //    if (toDo == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(toDo);
        //}

        // PUT: api/ToDo/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutToDo(int id, ToDo toDo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != toDo.Id)
            {
                return BadRequest();
            }

            db.Entry(toDo).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToDoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ToDo
        [ResponseType(typeof(ToDo))]
        public IHttpActionResult PostToDo(ToDo toDo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ToDos.Add(toDo);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = toDo.Id }, toDo);
        }

        // DELETE: api/ToDo/5
        [ResponseType(typeof(ToDo))]
        public IHttpActionResult DeleteToDo(int id)
        {
            ToDo toDo = db.ToDos.Find(id);
            if (toDo == null)
            {
                return NotFound();
            }

            db.ToDos.Remove(toDo);
            db.SaveChanges();

            return Ok(toDo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ToDoExists(int id)
        {
            return db.ToDos.Count(e => e.Id == id) > 0;
        }
    }
}