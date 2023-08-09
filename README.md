# HIDRO SERVICII - Modern UI/UX website using React.js & Tailwind CSS

# run dev server
yarn run dev

# create a production build
yarn run build


# Deployment
The followind website is being hosted on Vercel.

- Its automatically being deployed on changes to the master branch.

- On a change Vercel detects the webhook being sent by github then starts building the Dockerfile from the repository. 

The dockerfile uses Node in the first-stage to build the static files then serves them from Nginx in the second stage of the Dockerfile.
