import React from "react";
import "./Palette.css";

const Color = ({ color, active, onClick }) => {
  return (
    <div
      className={`color ${active && "active"}`}
      style={{ background: color }}
      onClick={onClick}
    ></div>
  );
};

const Palette = ({ colors, selected, onSelect }) => {
  //전달받은 props의 colors 배열을 각 색상에 맞는 list 컴포넌트로 변경
  const colorList = colors.map((color) => (
    <Color
      color={color}
      active={selected === color} //현재 선택한 색상이 colors 요소에 있으면 활성화
      onClick={() => onSelect(color)}
    />
  ));

  return <div className="palette">{colorList}</div>;
};

export default Palette;
