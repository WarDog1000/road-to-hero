# JSON Web Tokens (JWT) + bcrypt + passport

> Install

```bash
npm i jsonwebtoken bcryptjs passport
```

> Install `types` 

```bash
npm i @types/jsonwebtoken @types/bcryptjs @types/passport
```

> Import

```javascript
import { sign, verify } from 'jsonwebtoken'
```

> Config "Sign"

```javascript
const generateToken = async (id: string, etc?: string) => {

  const response = sign({id, etc}, JWT_SECRET, {expiresIn: "12h"})
  return response

}
```

> Config  "Verify"

```javascript
const verifyToken = async (token: string) => {
  
  const response  = verify(token, JWT_SECRET)

  return response

}
```