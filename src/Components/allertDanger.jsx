import React from "react";

export const allertDanger = (err) => {
  return err ? (
    <>
      <div className="alert alert-danger" role="alert">
        {err}
      </div>
    </>
  ) : (
    <></>
  );
};
