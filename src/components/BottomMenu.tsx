'use client';

const BottomMenu = () => (
  <footer className="container-fluid text-white py-4">
    <div className="row">
      <div className="col-md-4 text-center">
        <p>Lunch</p>
        <p>
          Monday - Friday: 11:00am - 2:30pm
          <br />
          Saturday - Sunday: Not open
        </p>
      </div>
      <div className="col-md-4 text-center">
        <p>Bar</p>
        <p>
          Monday - Friday: From 11:00am to closing
          <br />
          Saturday - Sunday: Not open
        </p>
      </div>
      <div className="col-md-4 text-center">
        <p>Dinner</p>
        <p>
          Monday - Friday: 5:00pm - 9:00pm
          <br />
          Saturday - Sunday: Not open
        </p>
      </div>
    </div>
  </footer>
);

export default BottomMenu;
