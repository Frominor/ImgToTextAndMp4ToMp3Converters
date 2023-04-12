import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import "./mp4.scss";
export default function MP4({ Value, SetValue, Get }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};
  const State = useSelector((state) => state.ConverterReducer);
  return (
    <form className="Mp4" onSubmit={handleSubmit(onSubmit)}>
      <section className="content">
        <h1 className="content_title">YouTube to MP3 Converter</h1>
        <p className="content_description">
          Transform YouTube videos into MP3s in just a few clicks!
        </p>

        <input
          {...register("form_input", {
            required: "Ошибка,введитие корректную ссылку",
            pattern: {
              value:
                "(?:.+?)?(?:/v/|watch/|?v=|&v=|youtu.be/|/v=|^youtu.be/)([a-zA-Z0-9_-]{11})+",
            },
          })}
          onChange={(e) => {
            SetValue(e.target.value);
          }}
          placeholder="Paste a Youtube video URL link..."
          className="form_input"
          type="text"
        />
        {errors.name && <div className="Error">{errors.form_input}</div>}
        <button
          type="submit"
          className="form_button"
          onClick={Get}
          disabled={Value == "" ? true : false}
        >
          Search
        </button>

        {State.urlResult ? (
          <a
            download={true}
            target="_blank"
            rel="noreferrer"
            href={State.urlResult}
            className="download_btn"
          >
            Download MP3
          </a>
        ) : (
          ""
        )}
        {State.Error2 ? <div className="Error">{State.Error2}</div> : ""}
      </section>
    </form>
  );
}
