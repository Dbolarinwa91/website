FROM node:18-alpine3.21 As base 

WORKDIR /app

COPY package.json package-lock.json ./

RUN \
if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
elif [ -f package-lock.json ]; then npm ci; \
elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
else echo "Lockfile not found." && exit 1; \
fi

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
#End of Dockerfile
