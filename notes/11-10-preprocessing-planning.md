# 11/11 

Remove speaker names
Remove punctuation except period, apostrophes
    - Josh gets answers from prof**
Remove line numbers (all numbers / footnotes)
Delete Act # / Scene #
Remove content within brackets
    - If both [ and ] then delete everything in a line
    - If just [ then delete everything after in a line
    - If just ] then delete everything before in a line

Keep in mind for later (ablations):
    - Replacing character names with [CHAR] token

Plans:
- Sub word tokenization vs whole word tokens
- Learn vs fine-tune word embeddings with word2vec, bert, etc.
- Classifier is transformer, BERT, GPT, etc. -> classification layer on top
- Train from scratch vs pre-trained

    - Sub-word tokenization
    - Fine-tune token embeddings on BERT
    - Model itself is pretrained BERT + classification layer for fine-tuning


Tasks for Nov 11 week:
- Josh writes preprocessing script per discussion
- Nov 12th go to office hours @ 4-4:10pm
- All research what the concepts/libraries are
* Goal: get embeddings by end of week