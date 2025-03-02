import PropTypes from 'prop-types';

export function CommonPage({ title, para }) {
    return (
        <div className="breadcrumbs">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                        <div className="breadcrumbs-content">
                            <h1 className="page-title">{title}</h1>
                            {/* <ul className="breadcrumb-nav">
                                <li><a href="index.html">Home</a></li>
                                <li>{title}</li>
                            </ul> */}
                            <div className='text-white'>
                           {para}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Props validation
CommonPage.propTypes = {
    title: PropTypes.string.isRequired,
    para: PropTypes.string.isRequired,
};


