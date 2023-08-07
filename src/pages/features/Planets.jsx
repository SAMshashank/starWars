import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useQuery } from "react-query";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { AiOutlineMenu } from "react-icons/ai";
import { BiGridAlt } from "react-icons/bi";
import Loader from "../../Loader";
import Dropdown from "react-bootstrap/Dropdown";
import {
  AiFillEye,
  AiOutlineDownload,
  AiTwotoneDelete,
  AiFillLock,
} from "react-icons/ai";
import { BsPencil, BsShare, BsFolderSymlink } from "react-icons/bs";
const fetchFilms = async () => {
  const res = await fetch(`https://swapi.dev/api/planets/`);
  return res.json();
};

const Planets = ({ film }) => {
  const [activeButton, setActiveButton] = useState("List");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const { data, status } = useQuery("films", fetchFilms, {
    onSuccess: () => console.log("Films Data fetched successfully"),
    onError: () => console.log("Error while fetching data of films"),
  });
  const pic = {
    pic: "https://blog.betway.com/media/width1220/23857/star-war-header_uk.jpg",
  };

  return (
    <>
      <div className="container">
        <ButtonGroup size="sm" className=".btn-group">
          <Button
            style={{ color: "white" }}
            variant={activeButton === "List" ? "light" : "secondary"}
            onClick={() => handleButtonClick("List")}
          >
            <AiOutlineMenu />
          </Button>
          <Button
            style={{ color: "white" }}
            variant={activeButton === "Grid" ? "light" : "secondary"}
            onClick={() => handleButtonClick("Grid")}
          >
            <BiGridAlt />
            &nbsp;Grid
          </Button>
        </ButtonGroup>
      </div>
      <div className="py-3 m-10 ">
        <h3 className="font-semibold text-lg">Films</h3>
        {activeButton === "List" && (
          <div className="h-full w-full object-cover object-center group-hover:opacity-75">
            <ul role="list" className="divide-y divide-gray-100 m-5 w-full">
              {status === "loading" ? (
                <Loader />
              ) : status === "error" ? (
                <div>Error fetching data</div>
              ) : status === "success" ? (
                // Check if data exists and data.results is an array before mapping
                Array.isArray(data?.results) ? (
                  data.results.map((film) => (
                    <li
                      key={film.name}
                      className="flex justify-between gap-x-6 py-5"
                    >
                      <div className="flex gap-x-4">
                        <img
                          className="h-12 w-12 flex-none rounded-full bg-slate-50"
                          src={pic.pic}
                          alt="img"
                        />
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-100">
                            {film.name}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-slate-100">
                            Terrain -&nbsp;{film.terrain}
                          </p>
                        </div>
                      </div>
                      <div className="hidden sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-slate-100">
                          Population
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-100">
                          <time dateTime={film.population}>
                            {film.population}
                          </time>
                        </p>
                      </div>
                    </li>
                  ))
                ) : (
                  <div>No films found</div>
                )
              ) : null}
            </ul>
          </div>
        )}
        {/* // */}
        {activeButton === "Grid" && (
          <div className="bg-transparent Grids">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 className="sr-only">Products</h2>

              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                {status === "loading" ? (
                  <Loader />
                ) : status === "error" ? (
                  <div>Error fetching data</div>
                ) : status === "success" ? (
                  // Check if data exists and data.results is an array before mapping
                  Array.isArray(data?.results) ? (
                    data.results.map((film) => (
                      <a
                        key={film.title}
                        href={film.url}
                        className="group"
                        target="_blank"
                      >
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                          <img
                            src={pic.pic}
                            alt="Star Wars img"
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                          />
                        </div>
                        <h3 className="mt-4 text-sm text-slate-100">
                          {film.name}
                        </h3>
                        <p className=" text-lg font-medium text-slate-100">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id="dropdown-basic"
                            >
                              Details
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                <AiFillEye style={{ display: "inline-flex" }} />{" "}
                                View
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                <AiOutlineDownload
                                  style={{ display: "inline-flex" }}
                                />{" "}
                                Download
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                <BsPencil style={{ display: "inline-flex" }} />{" "}
                                Rename
                              </Dropdown.Item>

                              <Dropdown.Item href="#/action-2">
                                <BsShare style={{ display: "inline-flex" }} />{" "}
                                Share Link
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                <BsFolderSymlink
                                  style={{ display: "inline-flex" }}
                                />{" "}
                                Move
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                <AiFillLock
                                  style={{ display: "inline-flex" }}
                                />{" "}
                                Mark Private
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                <AiTwotoneDelete
                                  style={{
                                    display: "inline-flex",
                                    color: "red",
                                  }}
                                />{" "}
                                <p
                                  style={{
                                    display: "inline-flex",
                                    color: "red",
                                  }}
                                >
                                  Delete
                                </p>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </p>
                      </a>
                    ))
                  ) : (
                    <div>No films found</div>
                  )
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Planets;
