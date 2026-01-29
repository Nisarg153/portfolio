FROM node:18-alpine AS build
WORKDIR /portfolio
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx:alpine AS production
COPY --from=build /portfolio/dist /usr/share/nginx/html

# SPA routing (so refresh on /about works)
RUN printf '%s\n' \
'server {' \
'  listen 80;' \
'  server_name _;' \
'  root /usr/share/nginx/html;' \
'  index index.html;' \
'  location / { try_files $uri $uri/ /index.html; }' \
'}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# FROM node:18-alpine AS production
# WORKDIR /portfolio
# COPY --from=build /portfolio/dist ./dist
# # If you are using a custom server, copy the server files here
# # COPY --from=build /portfolio/server.js ./
# # Install a simple static server to serve the built files
# RUN npm install -g serve
# EXPOSE 3000
# CMD ["serve", "-s", "dist", "-l", "3000"]

# FROM node:18-alpine
# WORKDIR /portfolio
# COPY package*.json ./
# RUN npm install --legacy-peer-deps 
# # -g npm@9.6.7
# COPY . .
# EXPOSE 5173
# CMD ["npm", "run", "dev","--", "--host"]



