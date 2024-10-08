"""empty message

Revision ID: e81046f3e652
Revises: 
Create Date: 2024-08-08 19:47:39.938237

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e81046f3e652'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('firstName', sa.String(length=200), nullable=False),
    sa.Column('lastName', sa.String(length=200), nullable=False),
    sa.Column('userName', sa.String(length=200), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('phone', sa.Integer(), nullable=True),
    sa.Column('birthDate', sa.Date(), nullable=True),
    sa.Column('country', sa.String(length=120), nullable=True),
    sa.Column('postalCode', sa.String(length=120), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('firstName'),
    sa.UniqueConstraint('lastName'),
    sa.UniqueConstraint('phone'),
    sa.UniqueConstraint('userName')
    )
    op.create_table('favorite',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('type', sa.String(length=150), nullable=False),
    sa.Column('apiId', sa.Integer(), nullable=False),
    sa.Column('itemName', sa.String(length=150), nullable=False),
    sa.Column('image', sa.String(length=200), nullable=True),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('favorite')
    op.drop_table('user')
    # ### end Alembic commands ###
