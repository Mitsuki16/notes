import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNotesStore } from "./Store";

function AddNote() {
  const [id, setId] = useState(Math.floor(Math.random() * 100000));
  const noteEdit = useNotesStore((state) => state.noteEdit);
  const setNoteEdit = useNotesStore((state) => state.setNoteEdit);
  const [colorCode, setColorCode] = useState("bg-[#7ECBFF]");
  const colorCodes = [
    "bg-[#FFFFFF]",
    "bg-[#7ECBFF]",
    "bg-[#FFA447]",
    "bg-[#FFA6C4]",
    "bg-[#1ECCC3]",
  ];
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const notes = useNotesStore((state) => state.notesData);
  const setNotes = useNotesStore((state) => state.setNotesData);
  console.log(title)
  const handleAdd = () => {
    let data = {
      id: id,
      title: title,
      desc: desc,
      colorCode: colorCode,
    };
    let removed_notes = notes.filter((item) => {
      return item.id !== id;
    });
    setNotes([...removed_notes, data]);
    setId('')
    setTitle('')
    setDesc('')
    setNoteEdit('');
    return navigate("/");
  };

  useEffect(() => {
    setColorCode("bg-[#7ECBFF]");
  }, []);

  useEffect(() => {
    let edit_note = notes.find((item) => {
      return item.id == noteEdit;
    });
    setId(edit_note ?  edit_note.id:Math.floor(Math.random() * 100000) );
    setTitle(edit_note ?  edit_note.title: '');
    setDesc(edit_note ? edit_note.desc: '');
    setColorCode(edit_note ? edit_note.colorCode: 'bg-[#7ECBFF]' );
  }, []);

  console.log(title)
  return (
    <div className={colorCode + " text-black h-[77vh] sm:h-[80%]"}>
      <div className={" p-4 h-full  "}>
        <Link onClick={() => setNoteEdit("")} to="/">
          <div className=" w-10 h-10">
            <img src="/back.png" className="  " />
          </div>
          <div>
            <img />
          </div>
        </Link>
        <div className=" flex flex-col gap-5 py-5">
          <div>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Title"
              className=" outline-none bg-transparent placeholder-black  rounded-xl text-2xl w-full p-2"
            />
          </div>
          <div>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              spellCheck="false"
              placeholder="Note"
              className="outline-none  bg-transparent h-[40vh]
               placeholder-black rounded-xl w-full resize-none  p-2"
            />
          </div>
        </div>
      </div>
      <div className={"  w-full  " + colorCode}>
        <div className=" bg-transparent pb-5 px-4 flex flex-col gap-3">
          <p className=" ">Pick a Color Code</p>
          <div className=" flex gap-2 ">
            {colorCodes.map((code) => {
              return (
                <div
                  key={code}
                  onClick={() => {
                    setColorCode(code);
                  }}
                  className={
                    code + " cursor-pointer border-2 border-black w-10 h-10"
                  }
                ></div>
              );
            })}
          </div>
        </div>
        <div
        className=" w-full cursor-pointer bg-white rounded-t-xl 
    flex items-center justify-around h-20 bottom-0 sticky "
        >
          <div
            onClick={() => handleAdd()}
            className=" flex justify-center rounded-full p-2 border-4 border-black"
          >
            <p className=" w-10 h-10 rounded-full bg-white">
              <img src="/tick.png" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNote;
