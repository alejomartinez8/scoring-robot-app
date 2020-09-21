import React, { Fragment, useState } from "react";
import styled from "styled-components";
import ButtonBack from "../layout/ButtonBack";

const Input = styled.input`
  width: 30px;
  height: 30px;
  margin: 5px;
`;

const initalState = {
  team: "",
  start: false,
  firstIntersection: false,
  stopGlass: false,
  depositBall: false,
  turnBack: false,
  firstIntersectionBack: false,
  backStart: false,
};

const LineFollowingJR = () => {
  const [formData, setFormData] = useState(initalState);
  const {
    team,
    start,
    firstIntersection,
    stopGlass,
    depositBall,
    turnBack,
    firstIntersectionBack,
    backStart,
  } = formData;

  const [totalPoints, setTotalPoints] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
    let total = totalPoints;
    switch (e.target.name) {
      case "start":
        e.target.checked ? (total += 25) : (total -= 25);
        break;
      case "firstIntersection":
        e.target.checked ? (total += 25) : (total -= 25);
        break;
      case "stopGlass":
        e.target.checked ? (total += 100) : (total -= 100);
        break;
      case "depositBall":
        e.target.checked ? (total += 100) : (total -= 100);
        break;
      case "turnBack":
        e.target.checked ? (total += 25) : (total -= 25);
        break;
      case "firstIntersectionBack":
        e.target.checked ? (total += 25) : (total -= 25);
        break;
      case "backStart":
        e.target.checked ? (total += 100) : (total -= 100);
        break;
      default:
        break;
    }
    setTotalPoints(total);
  };

  return (
    <Fragment>
      <div className="card shadow my-4">
        <div className="card-header">
          <h2 className="text-primary">Calificar Line Following JR</h2>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label" htmlFor="team">
                Equipo #
              </label>
              <div className="col-sm-2">
                <select className="form-control" name="team" id="team" required>
                  <option value=""></option>
                </select>
              </div>
            </div>

            <div className="form-group row ">
              <label className="col-sm-3 col-form-label">Tareas</label>
              <div className="col-sm-9 table-responsive">
                <table className="table table-striped ">
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center ">
                          <Input
                            type="checkBox"
                            name="start"
                            checked={start}
                            onChange={handleChange}
                            disabled={firstIntersection}
                          />
                          <label className="form-check-label" htmlFor="start">
                            Salir del INICIO (25 pts)
                          </label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Input
                            type="checkBox"
                            name="firstIntersection"
                            checked={firstIntersection}
                            onChange={handleChange}
                            disabled={!start || stopGlass}
                          />
                          <label className="form-check-label" htmlFor="start">
                            Superar 1a INTERSECCIÓN (25 pts)
                          </label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex align-items-center ">
                          <Input
                            type="checkBox"
                            name="stopGlass"
                            checked={stopGlass}
                            onChange={handleChange}
                            disabled={!firstIntersection || depositBall}
                          />
                          <label className="form-check-label" htmlFor="start">
                            Detenerse frente al VASO (100 pts)
                          </label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex align-items-center ">
                          <Input
                            type="checkBox"
                            name="depositBall"
                            checked={depositBall}
                            onChange={handleChange}
                            disabled={!stopGlass || turnBack}
                          />
                          <label className="form-check-label" htmlFor="start">
                            Depositar 1a PELOTA (100 pts)
                          </label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex align-items-center ">
                          <Input
                            type="checkBox"
                            name="turnBack"
                            checked={turnBack}
                            onChange={handleChange}
                            disabled={!depositBall || firstIntersectionBack}
                          />
                          <label className="form-check-label" htmlFor="start">
                            Devolverse (25 pts)
                          </label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex align-items-center ">
                          <Input
                            type="checkBox"
                            name="firstIntersectionBack"
                            checked={firstIntersectionBack}
                            onChange={handleChange}
                            disabled={!turnBack || backStart}
                          />
                          <label className="form-check-label" htmlFor="start">
                            Superar 1a INTERSECCIÓN (25 pts)
                          </label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex align-items-center ">
                          <Input
                            type="checkBox"
                            name="backStart"
                            checked={backStart}
                            onChange={handleChange}
                            disabled={!firstIntersectionBack}
                          />
                          <label className="form-check-label" htmlFor="start">
                            Regresar al INICIO (100 pts)
                          </label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 col-form-label" htmlFor="team">
                Total
              </label>
              <div className="col-sm-9 display-4">{totalPoints} pts</div>
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary mx-1"
                // disabled={loading}
              >
                {/* {loading && (
                  <span className="spinner-border spinner-border-sm m-1"></span>
                )} */}
                Guardar
              </button>
              <ButtonBack className="btn btn-secondary m-1">Cancelar</ButtonBack>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LineFollowingJR;
