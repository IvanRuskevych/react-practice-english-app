import { Notify } from 'notiflix';

export default function messageInfo(message) {
  Notify.init({ position: 'center-top', distance: '50px' });
  return Notify.warning(message);
}
