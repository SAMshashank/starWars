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
import Input from "./Input";
import { BsPencil, BsShare, BsFolderSymlink } from "react-icons/bs";
const fetchFilms = async () => {
  const res = await fetch(`https://swapi.dev/api/vehicles/`);
  return res.json();
};

const Vehicles = ({ film }) => {
  const [activeButton, setActiveButton] = useState("List");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const { data, status } = useQuery("films", fetchFilms, {
    onSuccess: () => console.log("Films Data fetched successfully"),
    onError: () => console.log("Error while fetching data of films"),
  });
  const pic = {
    pic: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/05/Screen-Shot-2022-05-25-at-7.20.40-PM.jpg",
  };
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFilms = data?.results?.filter((film) =>
    film.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Input value={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="py-3 m-10 ">
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
                Array.isArray(filteredFilms) && filteredFilms.length > 0 ? (
                  filteredFilms.map((film) => (
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
                            Model -&nbsp;{film.model}
                          </p>
                        </div>
                      </div>
                      <div className="hidden sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-slate-100">
                          Top speed
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-100">
                          <time dateTime={film.max_atmosphering_speed}>
                            {film.max_atmosphering_speed}
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
                  Array.isArray(filteredFilms) && filteredFilms.length > 0 ? (
                    filteredFilms.map((film) => (
                      <a key={film.title} className="group">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                          <img
                            src={pic.pic}
                            href={film.url}
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

export default Vehicles;
