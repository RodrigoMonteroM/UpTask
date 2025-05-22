FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN echo "Contenido de node_modules/.bin:"
RUN ls -la node_modules/.bin || echo "node_modules/.bin no encontrado o vacío"
RUN echo "Intentando ejecutar vite --version directamente:"
RUN ./node_modules/.bin/vite --version || npm exec vite -- --version || echo "Fallo al ejecutar vite --version"
RUN which vite || echo "vite no está en el PATH"

COPY . .

RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]