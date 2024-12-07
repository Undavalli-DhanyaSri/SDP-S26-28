import React, { useState } from 'react';
import '../styles/Transport.css';

const Transport = () => {
  const [routes, setRoutes] = useState([
    { id: 1, busNumber: '123', route: 'Downtown to Uptown', seats: 40, reservedSeats: 30 },
    { id: 2, busNumber: '456', route: 'Central Park to City Hall', seats: 40, reservedSeats: 40 },
  ]);

  const [newRoute, setNewRoute] = useState({ busNumber: '', route: '', seats: 40 });
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [reservedSeat, setReservedSeat] = useState(false);

  const handleReserveSeat = (routeId) => {
    const updatedRoutes = routes.map((route) => {
      if (route.id === routeId) {
        if (route.reservedSeats < route.seats) {
          setReservedSeat(true);
          return { ...route, reservedSeats: route.reservedSeats + 1 };
        } else {
          setReservedSeat(false);
          alert('Error: No seats available on this route.');
        }
      }
      return route;
    });
    setRoutes(updatedRoutes);
  };

  const handleAddRoute = (e) => {
    e.preventDefault();
    setRoutes([...routes, { ...newRoute, id: routes.length + 1, reservedSeats: 0 }]);
    setNewRoute({ busNumber: '', route: '', seats: 40 });
    alert('Route added successfully!');
  };

  return (
    <div className="transport-container">
      <h1 className="transport-title">Transport Management</h1>
      
      {/* Display Routes */}
      <div className="routes-section">
        <h2>Available Routes</h2>
        {routes.map((route) => (
          <div key={route.id} className="route-card">
            <h3>{route.route}</h3>
            <p>Bus Number: {route.busNumber}</p>
            <p>Available Seats: {route.seats - route.reservedSeats}/{route.seats}</p>
            <button
              className="transport-button"
              onClick={() => handleReserveSeat(route.id)}
            >
              Reserve a Seat
            </button>
          </div>
        ))}
      </div>

      {/* Add New Route */}
      <div className="add-route-section">
        <h2>Add New Route</h2>
        <form onSubmit={handleAddRoute} className="add-route-form">
          <input
            type="text"
            placeholder="Bus Number"
            value={newRoute.busNumber}
            onChange={(e) => setNewRoute({ ...newRoute, busNumber: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Route Description"
            value={newRoute.route}
            onChange={(e) => setNewRoute({ ...newRoute, route: e.target.value })}
            required
          />
          <button type="submit" className="transport-button">
            Add Route
          </button>
        </form>
      </div>
    </div>
  );
};

export default Transport;
