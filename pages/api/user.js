import { userInfo } from '../../data/userInfo';

export default function handler(req, res) {
    res.status(200).json(userInfo)
  }
  