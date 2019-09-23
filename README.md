# Test
```bash
# Clone repo
git clone http://github.com/elijahboston/flatten

# Change directory
cd flatten

# Install packages
npm i

# Run tests
npm run test
```

# Install as a module
```bash
npm install elijahboston/flatten
```

# Use as a module
```javascript
const flatten = require('flatten');

const result = flatten([0, [1, 2], [3, 4, 5]]);
// result = [0, 1, 2, 3, 4, 5]
```