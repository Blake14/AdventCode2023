import React from "react";
import { AdventData } from "../data/AdventData";
import { useNavigate } from "react-router-dom";

const AdventHome = ({ selectedPuzzle, setSelectedPuzzle }) => {
  const navigate = useNavigate();
  const ColorPicker = (status) => {
    switch (status) {
      case "Not Started":
        return "#EEEEEE"; // Gray
      case "Created":
        return "#ffd166"; // Gray
      case "In Progress":
        return "#457b9d"; // Blue
      case "Pending":
        return "#ef233c"; // Red
      case "Complete":
        return "#a3b18a"; // Green
      default:
        return "#000000"; // Default to black or any other color
    }
  };
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        padding: 20,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {[...Array(25)].map((_, i) => {
        const day = i + 1;
        const puzzle = AdventData.find((a) => a.year === 2023 && a.day === day);
        const status = puzzle ? puzzle.status : "Not Started";
        let finalTitle;
        finalTitle = puzzle?.title;
        if (finalTitle === undefined) {
          finalTitle = "Unknown";
        } else {
          finalTitle = `"` + finalTitle + `"`;
        }
        return (
          <div
            key={i}
            style={{
              height: 150,
              width: 150,
              padding: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
                borderRadius: 15,
                background: ColorPicker(status),
                color: status !== "Not Started" ? "#fff" : "#cab1bd",
                cursor: status !== "Not Started" ? "pointer" : "default",
                position: "relative",
              }}
              onClick={() => {
                if (status !== "Not Started") {
                  setSelectedPuzzle([2023, day]);
                  navigate("/advent/puzzle");
                }
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  position: "absolute",
                  top: 1,
                  right: 8,
                }}
              >
                {status}
              </p>
              <div
                style={{
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: 24,
                    }}
                  >
                    <strong>{`Day ${day}`}</strong>
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 12,
                  }}
                >
                  <p>{`${finalTitle}`}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdventHome;
