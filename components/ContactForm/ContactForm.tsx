export default function ContactForm() {
  return (
    <section>
      <div className="container">
        <h2>Contact say hello</h2>
        <p>
          Have something you want to talk about? Need some design work done?
          Feel free to drop me a line and say hello!
        </p>
        <form>
          <div className="row g-3">
            <h3>name *</h3>
            <div className="col-md-6 mb-3">
              <label className="form-label" for="first_name">
                first name *
              </label>
              <input
                className="form-control"
                id="first_name"
                type="text"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" for="last_name">
                last name *
              </label>
              <input
                className="form-control"
                id="las_name"
                type="text"
                required
              />
            </div>
            <div className="col-12 mb-3">
              <label className="form-label" for="email">
                email *
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="col-12 mb-3">
              <label className="form-label" for="subject">
                subject *
              </label>
              <input
                className="form-control"
                type="text"
                id="subject"
                required
              />
            </div>
            <div className="col-12 mb-3">
              <label className="form-label" for="message">
                message *
              </label>
              <textarea
                className="form-control"
                name="message"
                id="message"
                cols="50"
                rows="3"
              ></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
