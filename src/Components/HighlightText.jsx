import React from "react";

const PriorAuthorizationRequestForm = () => {
  const highlightDiv = (text) => {
    if (text.includes("Status") || text.includes("Date")) {
      return { backgroundColor: "yellow" }; // Change background color to highlight
    }
    return {}; // Return empty object if no highlighting required
  };

  const formData = `
    <strong>Patient Information:</strong>
    <p>
      <strong>Name:</strong> John Doe
      <br />
      <strong>Date of Birth:</strong> January 1, 1980
      <br />
      <strong>Insurance ID:</strong> 123456789
      <br />
      <strong>Primary Care Physician:</strong> Dr. Jane Smith
      <br />
    </p>

    <strong>Authorization Requested:</strong>
    <p>
      <strong>Authorization Number:</strong> [Leave Blank - for Insurance Use Only]
      <br />
      <strong>Authorization Start Date:</strong> April 15, 2024
      <br />
      <strong>Authorization End Date:</strong> April 30, 2024
      <br />
    </p>

    <strong>Insurance Approval:</strong>
    <p>
      <strong>Authorization Status:</strong> Pending
      <br />
      <strong>Comments:</strong> Authorization request is under review. Decision expected within 3 business days.
      <br />
    </p>

    <strong>Additional Field:</strong>
    <p>
      <strong>Field Name:</strong> Field Value
      <br />
    </p>

    <strong>Another Field:</strong>
    <p>
      <strong>Field Name:</strong> Field Value
      <br />
    </p>
  `;
  const sections = formData.split(/<strong>|<\/p>/); // Split the string into sections based on <strong> and </p> tags

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "left",
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
        Prior Authorization Request Form
      </h2>
      {sections.map((section, index) => {
        if (section.trim() === "") return null; // Skip empty sections
        const content = section.replace("</strong>", "").trim(); // Remove closing </strong> tag from content
        const highlightedStyle = highlightDiv(content); // Apply highlighting based on content
        return (
          <div
            key={index}
            style={{ marginBottom: "20px", ...highlightedStyle }}
          >
            <p
              style={{ fontSize: "16px", lineHeight: "1.6" }}
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
          </div>
        );
      })}
    </div>
  );
};

export default PriorAuthorizationRequestForm;
