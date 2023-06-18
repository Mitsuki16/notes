import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNotesStore } from "./Store";

function HomePage(props) {
  const navigate = useNavigate();
  const notes = useNotesStore((state) => state.notesData);
  const setNotes = useNotesStore((state) => state.setNotesData);
  const setNoteEdit = useNotesStore((state) => state.setNoteEdit);
  const handleDelete = (id) => {
    setNotes(
      notes.filter((item) => {
        return item.id !== id;
      })
    );
  };
   const handleEdit = (id) => {
    setNoteEdit(id)
    navigate("/notes/AddEditNote")
  };
  let notes_mapped = notes.map((item) => {
    let classes =
      "  flex h-24 items-center border-2 border-black rounded-xl cursor-pointer " + item.colorCode;
    return (
      <div 
      key={item.id} className={classes}>
        <div  onClick={() => handleEdit(item.id)} 
          className=" w-[75%] p-4 flex justify-between items-center text-black">
          <div className=" flex flex-col gap-1">
            <div>
              <h3 className=" text-2xl ">{item.title}</h3>
            </div>
            <div>
              <h3 className=" text-xl  ">{item.desc.substring(1,30)}</h3>
            </div>
          </div>
        </div>
          <div className=" flex gap-3">
            <span
              onClick={() => handleEdit(item.id)}
               className=" cursor-pointer w-8 h-8 ">
              <img src="/edit.png" />
            </span>
            <span
              onClick={() => handleDelete(item.id)}
              className=" cursor-pointer w-8 h-8 "
            >
              <img src="/dustbin.png" />
            </span>
          </div>
      </div>
    );
  });
  return (
    <>
      <div className=" flex flex-col p-4  ">
        <div className=" flex justify-between ">
          <div className=" flex items-center">
            <h1 className=" text-4xl ">Hi Sandy</h1>
            <span className=" w-10 h-10 ">
              <img src="/vichand.png" />
            </span>
          </div>
          <div>
            <h1 className=" w-10 h-10 rounded-full bg-gray-400 ">
              <img src="/profile_pic.avif" className=" w-10 h-10 object-cover rounded-full" /></h1>
          </div>
        </div>
        <div>
          <h1 className=" text-2xl pt-5">My Notes ({notes.length})</h1>
        </div>
        <div className=" w-full h-[73vh] sm:h-[60vh]  overflow-auto scroll-mx-7
         pt-4 text-3xl flex flex-col gap-5  ">
          {notes_mapped.length !== 0 ?
           (
            notes_mapped
          ) : (
            <div className=" flex justify-center rounded-full flex-col items-center gap-5">
                <img src='/no_notes_img.avif' className=" max-w-[70%] rounded-full" />
              <h1>No Notes</h1>
              <h2 className=" text-xl text-center w-[60%]">Create a Note and it will show up here.</h2>
            </div>
          )}
        </div>
      </div>
      <Link
        to="/notes/AddEditNote"
        className=" w-full cursor-pointer bg-white rounded-t-xl 
    flex items-center justify-around h-20 bottom-0 sticky "
      >
        <div className=" flex justify-center rounded-full p-2 border-4 border-black">
          <p className=" w-10 h-10 rounded-full bg-white">
            <img src="/plus.png" />
          </p>
        </div>
      </Link>
    </>
  );
}

export default HomePage;
