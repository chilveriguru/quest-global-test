import React, { Fragment, useState } from 'react'
import { ProductDetails } from '../assets/ProductDetails'

let Product = () => {
    let [search, setsearch] = useState("");
    let [EstimatedPrice, setEstimatedPrice] = useState()
    let [mileage, setmileage] = useState(null)
    let [TotalPrice, setTotalPrice] = useState()

    let [Bookdeails, setBookdeails] = useState({
        NameIndex: "",
        fromDate: "",
        toDate: "",
        mileage: ""
    });
    let searched = (rows) => {
        return rows.filter(
            (row) => row.name.toLowerCase().indexOf(search) > -1

        );
    };
    let CalcuateDays = () => {
        //define two date object variables to store the date values  
        var date1 = new Date(Bookdeails.fromDate);
        var date2 = new Date(Bookdeails.toDate);

        //calculate time difference  
        var time_difference = date2.getTime() - date1.getTime();

        //calculate days difference by dividing total milliseconds in a day  
        var result = time_difference / (1000 * 60 * 60 * 24);
        console.log("No Day", Bookdeails)
        const filterProduct = ProductDetails.filter((item, index) => index == Bookdeails.NameIndex);
        // console.log("filter product", filterProduct[0].price * result * 10)

        //  10 miles will be added every day so the multi by 10

        setEstimatedPrice(filterProduct[0].price * result)
        setTotalPrice(filterProduct[0].price * result * 10)
        setmileage(filterProduct[0].mileage)

    }



    return (
        <Fragment>
            {/* <pre>{JSON.stringify(searched(ProductDetails))}</pre> */}
            {/* <pre>{JSON.stringify(Bookdeails)}</pre> */}

            <div className="container mt-5">
                <input type="text" name="search" value={search} onChange={(e) => setsearch(e.target.value)} className="form-control" placeholder="Search by Name" /><br />

                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Index</th>
                            <th scope="col">Name</th>
                            <th scope="col">Availability</th>
                            <th scope="col">Need to repair</th>
                            <th scope="col">Durability</th>
                            <th scope="col">mileage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ProductDetails.length > 0 ? <Fragment>
                                {
                                    searched(ProductDetails).map((item, index) => {
                                        return (
                                            <tr>
                                                <td key={item.index}>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.availability ? "True" : "False"}</td>
                                                <td>{item.needing_repair ? "True" : "False"}</td>
                                                <td>{item.max_durability}</td>
                                                <td>{item.mileage}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </Fragment> : <tr>
                                <td colSpan="6">No records</td>
                            </tr>
                        }
                    </tbody>
                </table>

                {/* <!-- Button trigger modal --> */}
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">
                    Book
                </button>{" "}
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModa3">
                    Return
                </button>


                {/* <!--book Modal --  > */}
                <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Book the product</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">


                                <form>
                                    <select class="custom-select" name="NameIndex" value={Bookdeails.name} onChange={(e) => setBookdeails({ ...Bookdeails, NameIndex: e.target.value })}>
                                        <option selected>Choose...</option>
                                        {
                                            ProductDetails.length > 0 ? <Fragment>
                                                {
                                                    ProductDetails.map((item, index) => {
                                                        return (
                                                            <option value={index}>{item.name}</option>
                                                        )
                                                    })
                                                }
                                            </Fragment> : null
                                        }
                                    </select>
                                    <div class="form-group">
                                        Form:  <input type="date" name="fromDate" value={Bookdeails.fromDate} onChange={(e) => setBookdeails({ ...Bookdeails, fromDate: e.target.value })} className="form-control" />
                                        To:  <input type="date" name="toDate" value={Bookdeails.toDate} onChange={(e) => setBookdeails({ ...Bookdeails, toDate: e.target.value })} className="form-control" />

                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                                        <button type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModa2" onClick={CalcuateDays}>Yes</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>



                {/* <!--book Modal Estimate--  > */}

                <div class="modal fade" id="exampleModa2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Book the product</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                user estimated price is {EstimatedPrice}<br />
                                Do you want to procedure?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                                <button type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" >Yes</button>
                            </div>

                        </div>
                    </div>
                </div>
                {/* --------------------------------------------------------------------------------- */}
                {/* <!--return  Modal --  > */}
                <div class="modal fade" id="exampleModa3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Return product</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">


                                <form>
                                    <select class="custom-select" name="NameIndex" value={Bookdeails.name} onChange={(e) => setBookdeails({ ...Bookdeails, NameIndex: e.target.value })}>
                                        <option selected>Choose...</option>
                                        {
                                            ProductDetails.length > 0 ? <Fragment>
                                                {
                                                    ProductDetails.map((item, index) => {
                                                        return (
                                                            <option value={index}>{item.name}</option>
                                                        )
                                                    })
                                                }
                                            </Fragment> : null
                                        }
                                    </select>

                                    <input type="text" className="form-control" value={mileage} disabled />

                                    {mileage}

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                                        <button type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModa4" onClick={CalcuateDays}>Yes</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>


                {/* ================================================ */}
                {/* <!--return Modal --  > */}

                <div class="modal fade" id="exampleModa4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Return product</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                user total price is {TotalPrice}<br />
                                Do you want to procedure?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                                <button type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal">Yes</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default Product