import { useState } from "react";

export default function PostQuestion() {
  const [email, setEmail] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [content, setContent] = useState("");
  const postData = { content, email, cellPhone };

  const emailRegex = new RegExp("[a-z0-9]+@[a-z0-9]+.[a-z]{2,3}");
  const phoneRegex = new RegExp(
    /^(070|02|0[3-9]{1}[0-9]{1})[0-9]{3,4}[0-9]{4}$/
  );
  const cellPhoneRegex = new RegExp(/^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/);

  const postQuestion = async () => {
    const post = await (
      await fetch("/api/postQuestion", {
        method: "POST",
        body: JSON.stringify(postData),
      })
    ).json();
    console.log(post);
  };

  const onSubmitHandle = () => {
    if (emailRegex.test(email)) {
      if (phoneRegex.test(cellPhone) || cellPhoneRegex.test(cellPhone)) {
        if (content !== "") {
          //제출
          postQuestion();
          alert("성공");
        } else {
          alert("내용을 입력해주세요.");
        }
      } else {
        alert("연락처를 확인해주세요.");
      }
    } else {
      alert("이메일을 확인해주세요.");
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault(), onSubmitHandle();
        }}
      >
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className=""
        />
        <input
          value={cellPhone
            .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
            .replace(/(\-{1,2})$/g, "")}
          onChange={(e) => {
            setCellPhone(e.target.value.replaceAll("-", ""));
          }}
          className=""
        />
        <input
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          className=""
        />
        <button>요청하기</button>
      </form>
    </div>
  );
}
