import React from 'react';
import './Formular.scss';
import login from '../../utils/login';

class Formular extends React.Component {
  static async handleSubmit(ev) {
    const form = ev.target;
    ev.preventDefault();
    try {
      await login();
      await chayns.intercom.sendMessageToPage({ text: [...new FormData(form).entries()].map(([k, v]) => `${k} = ${v}`).join('\n') });
      chayns.dialog.alert('Site wird in Kürze hinzugefügt');
      form.reset();
    } catch (err) {
      chayns.dialog.alert('Du musst dich vorher einloggen');
    }
  }

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
    <div className="accordion" data-group="site">
      <div className="accordion__head">Site hinzufügen
        <div className="badge right">
            <i className="fa fa-plus" />
        </div>
      </div>
      <div className="accordion__body">
        <form onSubmit={Formular.handleSubmit} >
          <div className="grid">
            <div className="grid__item col-1-1-desktop col-1-1-mobile">
              <input className="input" name="name" type="text" placeholder="Name" required />
            </div>
            <div className="grid__item col-1-1-desktop col-1-1-mobile">
              <input className="input" name="address" type="text" placeholder="Adresse" required />
            </div>
            <div className="grid__item col-1-2-desktop col-1-1-mobile">
              <input className="input" name="zip" type="text" placeholder="PLZ" required />
            </div>
            <div className="grid__item col-1-2-desktop col-1-1-mobile">
              <input className="input" name="place" type="text" placeholder="Ort" required />
            </div>
            <div className="grid__item col-1-1-desktop col-1-1-mobile">
              <input className="input" name="email" type="email" placeholder="E-Mail" required />
            </div>
            <div className="grid__item col-1-1-desktop col-1-1-mobile">
              <textarea className="input" id="requestTappComment" name="comment" type="text" placeholder="Kommentar" rows="1" style={{ height: '33px', overflow: 'hidden' }} />
            </div>
            <div className="grid__item col-1-1-desktop col-1-1-mobile" style={{ textAlign: 'center', margin: '15px 0' }} >
              <input type="submit" className="button" value="Hinzufügen" />
            </div>
          </div>
        </form>
      </div>
    </div>
    );
  }
}

export default Formular;
