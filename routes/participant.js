const group = require('../models/Group');
const participant = require('../models/Participant');
const user = require('../models/User')
const auth = require('../middleware/auth.js');

const router = express.Router();

router

.post('/initiate', auth, participant.initiate);

module.exports = router;