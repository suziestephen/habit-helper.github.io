import React, { useRef } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_GRATITUDE, LOADING } from '../../utils/action';
import API from '../../utils/API';

function CreateGratitudeForm() {
  const gratefulForRef = useRef();
  const dateRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveGratitude({
      gratefulFor: gratefulForRef.current.value,
      date: dateRef.current.value,
    })
      .then((result) => {
        dispatch({
          type: ADD_GRATITUDE,
          post: result.data,
        });
      })
      .catch((err) => console.log(err));

    gratefulForRef.current.value = '';
    dateRef.current.value = '';
  };

  return (
    <div>
      <div className="header">
      </div>
      <h1>What are you grateful for today</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <label htmlFor="gratefulFor">Grateful For:</label>
        <input
          className="form-control mb-5"
          required
          ref={gratefulForRef}
          id="gratefulFor"
          placeholder="grateful for"
        />
        <label htmlFor="body">Date:</label>
        <textarea
          className="form-control mb-5"
          required
          ref={dateRef}
          id="date"
          placeholder="date"
        />
        <button
          className="btn btn-success mt-3 mb-5"
          disabled={state.loading}
          type="submit"
        >
          Save Entry
        </button>
      </form>
    </div>
  );
}

export default CreateGratitudeForm;
