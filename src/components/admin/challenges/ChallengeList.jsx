import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { challengeActions } from "../../../redux/actions";
import Spinner from "../../layout/Spinner";

const ChallengesList = ({
  challenge: { challenges, loading },
  getAllChallenges,
  deleteChallenge,
  match,
}) => {
  const { path } = match;

  useEffect(() => {
    getAllChallenges();
  }, [getAllChallenges]);

  const handleDeleteChallenge = (id) => {
    deleteChallenge(id);
  };

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to="/admin/" className="btn btn-sm btn-primary mb-2">
            Atrás
          </Link>
          <div className="card shadow mb-4">
            <div className="card-header">
              <h2 className="text-primary">Administrar Retos</h2>
            </div>

            <div className="card-body ">
              <p>
                Administra tus retos (sólo Administradores pueden acceder a esta
                sección)
              </p>
              <Link className="btn btn-sm btn-success mb-2" to={`${path}/add`}>
                Agregar Reto
              </Link>
              <div className="table-responsive">
                <table className="table table-striped ">
                  <thead>
                    <tr>
                      <th>Nombre Reto</th>
                      <th>Version</th>
                      <th>Habilitado</th>
                      <th>Categorías Habilitadas</th>
                      <th>Editar/Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {challenges &&
                      challenges.map((challenge) => (
                        <tr key={challenge._id}>
                          <td>{challenge.name}</td>
                          <td>{challenge.version}</td>
                          <td>
                            {challenge.available ? (
                              <span className="badge badge-pill badge-success">
                                Sí
                              </span>
                            ) : (
                              <span className="badge badge-pill badge-danger">
                                No
                              </span>
                            )}
                          </td>
                          <td>
                            {challenge.categories.map((category, index) => (
                              <span
                                key={index}
                                className="badge badge-pill badge-info mx-1"
                              >
                                {category}
                              </span>
                            ))}
                          </td>
                          <td style={{ whiteSpace: "nowrap" }}>
                            <Link
                              to={`${path}/edit/${challenge._id}`}
                              className="btn btn-sm btn-primary mr-1"
                            >
                              Editar
                            </Link>
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleDeleteChallenge(challenge._id)}
                            >
                              <span>Eliminar</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  challenge: state.challenge,
});

const actionCreators = {
  getAllChallenges: challengeActions.getAllChallenges,
  deleteChallenge: challengeActions.deleteChallenge,
};

export default connect(mapStateToProps, actionCreators)(ChallengesList);
