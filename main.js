const socialMedia = {
  linkedin: 'in/thainarafurforo',
  facebook: 'thaifurforo',
  instagram: 'thaifurforo',
  twitter: 'thaifurforo',
  github: 'thaifurforo'
}

//* boas práticas nomenclatura de variáveis e funções:
//* camelCase
//* PascalCase
//* snake_case

// programação sempre começa a contar do 0

function changeSocialMedia() {
  for (let li of socialMediaLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialMedia[social]}`
  }
}

changeSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      ;(userName.textContent = data.name),
        (userGithub.href = data.url),
        (userLogin.textContent = data.login),
        (userBio.textContent = data.bio),
        (userPicture.src = data.avatar_url)
    })
}

getGitHubProfileInfos()
