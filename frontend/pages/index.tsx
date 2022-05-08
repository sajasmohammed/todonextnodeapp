import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
export default function Home() {
    const [message, setMessage] = useState('');
    const [auth, setAuth] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({ task: "" });

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await fetch('http://127.0.0.1:3000/api/user', {
                        credentials: 'include',
                    });

                    const content = await response.json();

                    setMessage(`Hi ${content.name}`);
                    setAuth(true);
                } catch (e) {
                    setMessage('You are not logged in');
                    setAuth(false);
                }
            }
        )();
    });

    return (
        <Layout auth={auth}>
            {message}

            <section className="vh-100  gradient-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-80">

                        <div className="card">
                            <div className="card-body p-10">

                                <form className="d-flex justify-content-center align-items-center mb-4">

                                    <div className="row">
                                        <input type="text" id="form2" className="form-control" placeholder="New Task" />
                                    </div>
                                    <button type="submit" className="btn btn-info">Add</button>
                                </form>

                                <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active" id="ex1-tab-1" data-mdb-toggle="tab" href="#ex1-tabs-1" role="tab"
                                            aria-controls="ex1-tabs-1" aria-selected="true">All</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="ex1-tab-2" data-mdb-toggle="tab" href="#ex1-tabs-2" role="tab"
                                            aria-controls="ex1-tabs-2" aria-selected="false">Active</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="ex1-tab-3" data-mdb-toggle="tab" href="#ex1-tabs-3" role="tab"
                                            aria-controls="ex1-tabs-3" aria-selected="false">Completed</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="ex1-content">
                                    <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel"
                                        aria-labelledby="ex1-tab-1">
                                        <ul className="list-group mb-0">
                                            <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                            >
                                                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                                                <s>Cras justo odio</s>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                            >
                                                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                                                <s>Dapibus ac facilisis in</s>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                            >
                                                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                                Morbi leo risus
                                            </li>
                                            <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                            >
                                                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                                Porta ac consectetur ac
                                            </li>
                                            <li className="list-group-item d-flex align-items-center border-0 mb-0 rounded"
                                            >
                                                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                                Vestibulum at eros
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                                        <ul className="list-group mb-0">
                                            <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                            >
                                                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                                Morbi leo risus
                                            </li>
                                            <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                            >
                                                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                                Porta ac consectetur ac
                                            </li>
                                            <li className="list-group-item d-flex align-items-center border-0 mb-0 rounded"
                                            >
                                                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                                Vestibulum at eros
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                                        <ul className="list-group mb-0">
                                            <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                            >
                                                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                                                <s>Cras justo odio</s>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                            >
                                                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                                                <s>Dapibus ac facilisis in</s>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    )
}
