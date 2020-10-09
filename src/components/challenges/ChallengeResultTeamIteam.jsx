import React, { useState } from "react";
import ModalEditScoringTurn from "./modals/ModalEditScoringTurn";

const ChallengeResultTeamIteam = ({
  userAuth,
  index,
  team,
  challenge,
  handleDeleteScore,
  handleUpdateScore,
}) => {
  //** Handle Expander */
  const [expanded, setExpanded] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [turn, setTurn] = useState({
    _id: "",
    tasks: [],
    penalites: [],
    bonusPoint: 0,
  });

  const toggleExpander = (e) => {
    if (!expanded) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  };

  const handleShowEdit = (id) => {
    const turn = team.turns.find((elm) => elm._id === id);
    console.log(turn);
    setTurn({ ...turn, teamId: team._id });
    setShowEdit(true);
  };

  console.log(team);

  return (
    <>
      <tr key="tr-main" onClick={toggleExpander}>
        <td>{index + 1}</td>
        <td>{"name" in team && team.name}</td>
        <td>
          {"user" in team && "institution" in team.user && team.user.institution}
        </td>
        <td>{"user" in team && "city" in team.user && team.user.city}</td>
        <td className="text-center">{"topPoints" in team && team.topPoints}</td>
        <td className="text-center">{"totalPoints" in team && team.totalPoints}</td>
        <td>
          {"turns" in team && team.turns.length} de{" "}
          {"maxTurns" in challenge && challenge.maxTurns}
        </td>
      </tr>
      <>
        {expanded && (
          <tr key={team._id}>
            <td className="bg-light" colSpan={7}>
              <div className="container m-2 d-flex justify-content-md-center">
                <div className="card w-75">
                  <div className="card-body">
                    <h5 className="text-primary">Turnos Calificados {team.name}</h5>

                    {"turns" in team &&
                      team.turns.length > 0 &&
                      team.turns.map((turn, index) => (
                        <>
                          <div
                            key={turn._id}
                            className="d-flex justify-content-center"
                          >
                            <span>
                              <strong>Turno {index + 1}:</strong> {turn.totalPoints}{" "}
                              pts{" "}
                              {userAuth.role === "Admin" && (
                                <span>
                                  <button
                                    className="btn btn-sm btn-primary m-1"
                                    onClick={() => handleShowEdit(turn._id)}
                                  >
                                    Editar
                                  </button>{" "}
                                  <button
                                    className="btn btn-sm btn-danger m-1"
                                    onClick={() => handleDeleteScore(turn._id)}
                                  >
                                    Eliminar
                                  </button>
                                </span>
                              )}
                            </span>
                          </div>
                        </>
                      ))}
                  </div>
                </div>
              </div>
            </td>
          </tr>
        )}
      </>
      <ModalEditScoringTurn
        key="modal-edit"
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        turn={turn}
        handleUpdateScore={handleUpdateScore}
      />
    </>
  );
};

export default ChallengeResultTeamIteam;
