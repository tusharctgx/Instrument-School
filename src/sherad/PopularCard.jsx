

const PopularCard = ({use}) => {
    return (
        <div className='mx-auto'>
            <div className="card w-80 bg-base-100 shadow-xl">
                            <figure><img src={use?.images} className='object-cover h-56 w-80'  /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {use?.productname}
                                </h2>
                                <p>{use?.instructorEmail}</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">popullar Classes</div>
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default PopularCard;