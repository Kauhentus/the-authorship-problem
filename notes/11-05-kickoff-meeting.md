# 11/05: Kickoff Meeting

## Example of differences:

William Shakespeare
I will tell truth; by grace itself I swear.
You know my father left me some prescriptions
Of rare and prov’d effects, such as his reading
And manifest experience had collected
For general sovereignty; and that he will’d me
In heedfull’st reservation to bestow them,
As notes whose faculties inclusive were
More than they were in note. Amongst the rest
There is a remedy, approv’d, set down,
To cure the desperate languishings whereof
The king is render’d lost.

Ben Jonson:
No. I'll have no bawds,
But fathers and mothers: they will do it best,
Best of all others. And my flatterers
Shall be the pure and gravest of divines,
That I can get for money. My mere fools,
Eloquent burgesses, and then my poets
The same that writ so subtly of the fart,
Whom I will entertain still for that subject.
The few that would give out themselves to be
Court and town-stallions, and, each-where, bely
Ladies who are known most innocent for them;

## Key problems

Shakespeare's Pericles -- who wrote acts 1 and 2?

The Witch of Edmonton -- Rowley, Dekker, and Ford -- who wrote which act?

## Data

Project Gutenburg

Shakespeare, Jonson, Dekker, Ford, Rowley, Middleton, Wilkins, Dekker, etc

## Method

BERT transformer

Sub-word tokenization? Dictionary

Sequence length choice? Paragraph
- Big chunks are probably better

Traditional statistical learning as plan B (optional)

Our compute:
- Laptop (?)
- NVIDIA PC if needed

## Next steps

11/04 DATA STAGE:
- First collect data off Project Gutenberg 
    - List of all authors
    - Identify plays that have authorship problem (Pericles, Witch of Edmonton)
    - Manually remove footnotes/editors notes
- Figure out preprocessing of files

* Josh:
    * Get list of authors for y'all
    * Ask professor about authorship problem plays
    * Add to repository
    * copy paste from PG to corpus folder
    * Schedule google calendar 4PM TUE/FRI 
* Bella:
    * copy paste from PG to corpus folder
* Yiyang:
    * copy paste from PG to corpus folder

11/11 WORD EMBEDDINGS:
- Tokenization problem
- Pretrained vs train ourselves
- Word2vec, BERT, etc.

11/18 DL CLASSIFICATION:
- BERT classifier
- GPT classifier
- Other classifiers

11/25 - Thanksgiving is happening

12/02 WRAP UP + PRESENTATION WORK:
- Check-in write up on 11/26
- Slides for DL Day on 12/10
- Final write up + repo on 12/12

12/10 DL DAY!!
