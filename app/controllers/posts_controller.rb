class PostsController < ApplicationController
  before_action :set_post, only: %i[show update destroy]

  # GET /posts
  # serialise json to only include relevant information
  def index
    @posts = Post.all
    render json: @posts.to_json(
      only: %i[id title body category],
      include: { user: { only: :name } }
    )
  end

  # GET /posts/1
  # include comments when showing single post
  def show
    render json: @post.to_json(
      only: %i[id title body category],
      include: { user: { only: :name }, comments: { only: %i[id body user_id] } }
    )
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :body, :category, :user_id)
    end
end
