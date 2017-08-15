import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
    initialState: {
        users: [],
        user: {},
        inited: false
      }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/index'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
