FROM node:lts-alpine

# set working directory to /app/
WORKDIR /app/

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Start
CMD ["npm", "start"]