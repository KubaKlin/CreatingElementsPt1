const people = [
  {
    firstName: 'Jan',
    lastName: 'Kowalski',
    profession: 'Web developer'
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    profession: 'Designer'
  }
]

const wrapper = document.querySelector('#wrapper');

function cloneCard(card) {
  const clonedCard = card.cloneNode(true);

  const clonedDeleteButton = clonedCard.querySelector('.remove-button');
  if (clonedDeleteButton) {
    clonedDeleteButton.addEventListener('click', function() {
      clonedCard.remove();
    })
  }

  const clonedCloneButton = clonedCard.querySelector('.clone-button');
  if (clonedCloneButton) {
    clonedCloneButton.addEventListener('click', function() {
      cloneCard(card);
    });
  }

  wrapper.append(clonedCard);
}

people.forEach(function(person) {
  const card = document.createElement('div');
  if (wrapper) {
    wrapper.prepend(card);
  }

  const nameParagraph = document.createElement('p');
  nameParagraph.innerText = `${person.firstName} ${person.lastName}`;
  card.append(nameParagraph);

  const professionParagraph = document.createElement('p');
  professionParagraph.innerText = person.profession;
  card.append(professionParagraph);

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  removeButton.innerText = 'Remove card';
  card.append(removeButton);

  removeButton.addEventListener('click', function() {
    card.remove();
  });

  const cloneCardButton = document.createElement('button');
  cloneCardButton.innerText = 'Clone card';
  cloneCardButton.classList.add('clone-button');
  card.append(cloneCardButton);

  cloneCardButton.addEventListener('click', function() {
    cloneCard(card);
  });
})

