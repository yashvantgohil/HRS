import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllHacker } from "../../store/hacker/actions";
import { NavLink } from "react-router-dom";

export default function Hacker() {
  const hackers = useSelector((state) => state.hacker.hackers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllHacker());
  }, [dispatch]);

  return (
    <div>
      {/* <pre>{JSON.stringify(hackers, null, 2)}</pre> */}
      <div className="mt-5 list-group d-flex flex-lg-row justify-content-md-around">
        {hackers &&
          hackers.map((hacker) => (
            <NavLink
              to={`/hackers/${hacker._id}`}
              className="list-group-item list-group-item-action my-1 mx-lg-2 "
              aria-current="true"
              key={hacker._id}
            >
              <div className="d-flex w-100 align-items-center justify-content-between ">
                <h3>{hacker.name}</h3>
                <div>
                  <img
                    src="https://picsum.photos/150/150"
                    style={{
                      maxWidth: "150px",
                      maxHeight: "150px",
                      borderRadius: "75px",
                    }}
                    alt="..."
                  />
                </div>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
}
